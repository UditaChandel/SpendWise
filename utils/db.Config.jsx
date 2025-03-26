import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';

import * as schema from './schema';

const sql = neon('postgresql://neondb_owner:npg_qfZkt3iG0ync@ep-noisy-wave-a85vy7ef-pooler.eastus2.azure.neon.tech/SpendWise?sslmode=require');

// Correct drizzle instance creation
export const db = drizzle(sql, { schema });
