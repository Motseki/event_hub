// import { authMiddleware } from "@clerk/nextjs/server";

 
// export default authMiddleware({
//   publicRoutes: [
//     '/',
//     '/events/:id',
//     '/api/webhooks/clerk(.*)',
//     '/api/webhooks/clerk',
//     '/api/webhooks/stripe',
//     '/api/uploadthing'
//   ],
//   ignoredRoutes: [
//     '/api/webhooks/clerk',
//     '/api/webhooks/stripe',
//     '/api/uploadthing'
//   ]
// });
 
// export const config = {
//   matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
// };
 

import { authMiddleware } from "@clerk/nextjs/server";

export default authMiddleware({
  publicRoutes: [
    '/',
    '/events/:id',
    // '/api/webhooks(.*)', // Clerk webhook routes as public
    `/api/webhooks/(.*)` ,
    '/api/webhooks',
    '/api/webhooks/stripe',
    '/api/uploadthing'
  ],
  ignoredRoutes: [
    '/api/webhooks', // Clerk webhook routes to be ignored by auth
    '/api/webhooks/stripe',
    '/api/uploadthing'
  ]
});

export const config = {
  matcher: [
    '/((?!.+\\.[\\w]+$|_next).*)', 
    '/', 
    '/(api|trpc)(.*)'
  ],
};
