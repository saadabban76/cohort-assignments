import { initTRPC } from '@trpc/server';
 
/**
 * Initialization of tRPC backend
 * Should be done only once per backend!
 */

const t = initTRPC.context<{user?: string}>().create();
 
/**
 * Export reusable router and procedure helpers
 * that can be used throughout the router
 */
// ? this router api method is just like const app = express();
export const router = t.router;
export const publicProcedure = t.procedure;
