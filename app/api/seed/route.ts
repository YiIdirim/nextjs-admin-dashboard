import { db, machines } from 'lib/db';

export const dynamic = 'force-dynamic';

export async function GET() {
  await db.insert(machines).values([
    {
      id: 1,
      serial: 'SN-001', // added serial number
      imageUrl:
        'https://uwja77bygk2kgfqe.public.blob.vercel-storage.com/smartphone-gaPvyZW6aww0IhD3dOpaU6gBGILtcJ.webp',
      name: 'Calibur3', // changed
      status: 'active',
      price: '999.00',
      stock: 150,
      availableAt: new Date()
    },
    {
      id: 2,
      serial: 'SN-002', // added serial number
      imageUrl:
        'https://uwja77bygk2kgfqe.public.blob.vercel-storage.com/earbuds-3rew4JGdIK81KNlR8Edr8NBBhFTOtX.webp',
      name: 'Calibur3', // changed
      status: 'active',
      price: '199.00',
      stock: 300,
      availableAt: new Date()
    },
    {
      id: 3,
      serial: 'SN-003', // added serial number
      imageUrl:
        'https://uwja77bygk2kgfqe.public.blob.vercel-storage.com/home-iTeNnmKSMnrykOS9IYyJvnLFgap7Vw.webp',
      name: 'Calibur3', // changed
      status: 'active',
      price: '149.00',
      stock: 200,
      availableAt: new Date()
    },
    {
      id: 4,
      serial: 'SN-004', // added serial number
      imageUrl:
        'https://uwja77bygk2kgfqe.public.blob.vercel-storage.com/tv-H4l26crxtm9EQHLWc0ddrsXZ0V0Ofw.webp',
      name: 'Calibur3', // changed
      status: 'active',
      price: '799.00',
      stock: 50,
      availableAt: new Date()
    },
    {
      id: 5,
      serial: 'SN-005', // added serial number
      imageUrl:
        'https://uwja77bygk2kgfqe.public.blob.vercel-storage.com/laptop-9bgUhjY491hkxiMDeSgqb9R5I3lHNL.webp',
      name: 'Calibur3', // changed
      status: 'active',
      price: '1299.00',
      stock: 75,
      availableAt: new Date()
    },
    {
      id: 6,
      serial: 'SN-006', // added serial number
      imageUrl:
        'https://uwja77bygk2kgfqe.public.blob.vercel-storage.com/headset-lYnRnpjDbZkB78lS7nnqEJFYFAUDg6.webp',
      name: 'Calibur3', // changed
      status: 'active',
      price: '349.00',
      stock: 120,
      availableAt: new Date()
    },
    {
      id: 7,
      serial: 'SN-007', // added serial number
      imageUrl:
        'https://uwja77bygk2kgfqe.public.blob.vercel-storage.com/watch-S2VeARK6sEM9QFg4yNQNjHFaHc3sXv.webp',
      name: 'Calibur3', // changed
      status: 'active',
      price: '249.00',
      stock: 250,
      availableAt: new Date()
    },
    {
      id: 8,
      serial: 'SN-008', // added serial number
      imageUrl:
        'https://uwja77bygk2kgfqe.public.blob.vercel-storage.com/speaker-4Zk0Ctx5AvxnwNNTFWVK4Gtpru4YEf.webp',
      name: 'Calibur3', // changed
      status: 'active',
      price: '99.00',
      stock: 400,
      availableAt: new Date()
    },
    {
      id: 9,
      serial: 'SN-009', // added serial number
      imageUrl:
        'https://uwja77bygk2kgfqe.public.blob.vercel-storage.com/charger-GzRr0NSkCj0ZYWkTMvxXGZQu47w9r5.webp',
      name: 'Calibur3', // changed
      status: 'active',
      price: '59.00',
      stock: 500,
      availableAt: new Date()
    },
    {
      id: 10,
      serial: 'SN-010', // added serial number
      imageUrl:
        'https://uwja77bygk2kgfqe.public.blob.vercel-storage.com/thermostat-8GnK2LDE3lZAjUVtiBk61RrSuqSTF7.webp',
      name: 'Calibur3', // changed
      status: 'active',
      price: '199.00',
      stock: 175,
      availableAt: new Date()
    }
  ]);

  return Response.json({
    message: 'Seed data inserted'
  });
}
