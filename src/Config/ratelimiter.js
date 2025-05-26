import rateLimit from "express-rate-limit";
const rateLimiter = (app) => {
  const limiter = rateLimit({
    windowMs: 10 * 10 * 1000,
    max: 500,
    message: "Too many requests, try again later",
  });
  app.use(limiter);
};

export default rateLimiter;
