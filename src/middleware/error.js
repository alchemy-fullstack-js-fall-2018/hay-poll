export default (err, req, res, next) => {
  let code = 500;
  let error = 'Internal Server Error';

  if(err instanceof HttpError) {
    // we did this
    code = err.code;
    error = err.message;
    console.log('own error', err.name);
  }
  else if(err.name === 'CastError' || err.name === 'ValidationError') {
    // Mongoose errors
    code = 400;
    error = err.message;
  }
  else if(process.env.NODE_ENV !== 'production') {
    error = err.message;
    console.log(err);
  }
  else {
    console.log(err);
  }

  console.log(code);
  res.status(code).send({ error });
};

export class HttpError extends Error {
  constructor({ code, message }) {
    super(message);
    this.code = code;
    this.name = 'HttpError';
  }
}
