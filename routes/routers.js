const indexRouter = require('./index');
const usersRouter = require('./users');
const ingredientsRouter = require('./ingredients');
const instructionsRouter = require('./instructions');
const recipesRouter = require('./recipes');
const boxesRouter = require('./boxes');
const reviewsRouter = require('./reviews');
const statusRouter = require('./cookstatuses')

module.exports = {
    indexRouter,
    usersRouter,
    ingredientsRouter,
    instructionsRouter,
    recipesRouter,
    boxesRouter,
    reviewsRouter,
    statusRouter
}
