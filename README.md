# InvoiceDashboard

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.5.

## Development server

Run  `npm install -g @angular/cli`  to install Angular CLI

Run `npm install` to install package.

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

##  Features:
a)	Delete row
b)	Edit row
c)	Add a new row
d)	Sort
e)	Filter by comment
f)	Invoice number read only (automated)
g)	Date (automated)
h)	Validation of comment
i)	Paginate
j)	Date and comment are editable
    

## Core design:
1.	Hand written everything
2.	mock-source.ts  :  mock data source and  setting
3.	data.service.ts :  state manager and data process
    a)	read source then convert source to “Row” array.
    b)	Table subscribe the change event, so once sort, filter, delete event happened,   table will got the new data by “GetData” function
4.	“Cell component” is share for adding row and editing row.


## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
