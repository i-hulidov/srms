# Project setup
1. Clone the repository
2. Run `yarn install` to install all dependencies

# Run the Project
1. Run `yarn dev`

# Project structure:
> Entry point of the application.

* [src/main.tsx](src%2Fmain.tsx)

> The smallest components of the application. They are used to build molecules and features.

* [src/atoms](src%2Fatoms)

> The largest components of the application. In general, they shouldn't contain a large amount of props.

* [src/features](src%2Ffeatures)

> Custom hooks which are used for data transformation, data aggregation, etc.

* [src/hooks](src%2Fhooks)

> Components which are used to build the layout of the application.

* [src/layout](src%2Flayout)
    * The [src/layout/ApplicationRouter](src%2Flayout%2FApplicationRouter) Component contains the routing logic of the application.

> Components which are used to build features.

* [src/molecules](src%2Fmolecules)

> Pages of the application.

* [src/routes](src%2Froutes)

> Utility functions which are used in multiple places of the application.

* [src/utils](src%2Futils)