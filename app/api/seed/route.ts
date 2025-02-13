import { db, machines } from 'lib/db';

export const dynamic = 'force-dynamic';

export async function GET() {
  await db.insert(machines).values([
    {
      id: 1,
      serial: 'WA-00094',
      imageUrl: '/calibur.png',
      status: 'produced',
      group: 'Exergy',
      machineNumber: 1,
      created: new Date()
    },
    {
      id: 2,
      serial: 'WA-00095',
      imageUrl: '/calibur.png',
      status: 'inprod',
      group: 'Exergy',
      machineNumber: 2,
      created: new Date()
    },
    {
      id: 3,
      serial: 'WA-00096',
      imageUrl: '/calibur.png',
      status: 'notyetprod',
      group: 'Exergy',
      machineNumber: 3,
      created: new Date()
    },
    {
      id: 4,
      serial: 'WA-00097',
      imageUrl: '/calibur.png',
      status: 'produced',
      group: 'Exergy',
      machineNumber: 4,
      created: new Date()
    },
    {
      id: 5,
      serial: 'WA-00098',
      imageUrl: '/calibur.png',
      status: 'inprod',
      group: 'Wayland Additive',
      machineNumber: 5,
      created: new Date()
    },
    {
      id: 6,
      serial: 'WA-00099',
      imageUrl: '/calibur.png',
      status: 'notyetprod',
      group: 'Wayland Additive',
      machineNumber: 6,
      created: new Date()
    },
    {
      id: 7,
      serial: 'WA-00100',
      imageUrl: '/calibur.png',
      status: 'produced',
      group: 'Wayland Additive',
      machineNumber: 7,
      created: new Date()
    }
  ]);

  return Response.json({
    message: 'Seed data inserted'
  });
}
