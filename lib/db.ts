import 'server-only';

import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import {
  pgTable,
  text,
  numeric,
  integer,
  timestamp,
  pgEnum,
  serial
} from 'drizzle-orm/pg-core';
import { count, eq, ilike } from 'drizzle-orm';
import { createInsertSchema } from 'drizzle-zod';

export const db = drizzle(neon(process.env.POSTGRES_URL!));

export const statusEnum = pgEnum('status', [
  'notyetprod',
  'inprod',
  'produced'
]);

export const machines = pgTable('machines', {
  id: serial('id').primaryKey(),
  serial: text('serial').notNull(),
  imageUrl: text('image_url').notNull(),
  status: statusEnum('status').notNull(),
  group: text('group'),
  machineNumber: integer('machine_number').notNull(),
  created: timestamp('created').notNull()
});

export type SelectMachine = typeof machines.$inferSelect;
export const insertMachineSchema = createInsertSchema(machines);

export async function getMachines( // renamed from getProducts
  search: string,
  offset: number
): Promise<{
  machines: SelectMachine[]; // renamed key from products
  newOffset: number | null;
  totalProducts: number;
}> {
  if (search) {
    return {
      machines: await db
        .select()
        .from(machines)
        .where(ilike(machines.serial, `%${search}%`))
        .limit(1000),
      newOffset: null,
      totalProducts: 0
    };
  }

  if (offset === null) {
    return { machines: [], newOffset: null, totalProducts: 0 };
  }

  let totalProducts = await db.select({ count: count() }).from(machines);
  let moreMachines = await db.select().from(machines).limit(5).offset(offset);
  let newOffset = moreMachines.length >= 5 ? offset + 5 : null;

  return {
    machines: moreMachines,
    newOffset,
    totalProducts: totalProducts[0].count
  };
}

export async function deleteMachineById(id: number) {
  await db
    .delete(machines)
    .where(eq(machines.id, id))
    .then(() => console.log(id));
}
