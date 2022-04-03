class Department {
  // private readonly id: string
  // name: string;
  private employees: string[] = [];

  constructor(private readonly id:string, public name:string) {
    // this.id = id;
    // this.name = n;
  }

  describe(this: Department) {
    console.log(`Department(${this.id}): ${this.name}`)
  }

  addEmployee(employee: string){
    this.id = 'd2';
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length)
    console.log(this.employees)
  }
}

const accounting =  new Department('d1', 'Accounting');

accounting.addEmployee('Max')
accounting.addEmployee('Manu')

// accounting.employees[2] = "Anna"

accounting.describe()

// const accountingCopy = {name: 'DUMMY', describe: accounting.describe };

// accountingCopy.describe();
