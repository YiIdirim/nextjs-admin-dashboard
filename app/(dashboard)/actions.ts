'use server';

import { deleteMachineById } from '@/lib/db';
import { revalidatePath } from 'next/cache';

export async function deleteProduct(formData: FormData) {
  let id = Number(formData.get('id'));
  await deleteMachineById(id);
  revalidatePath('/');
}
