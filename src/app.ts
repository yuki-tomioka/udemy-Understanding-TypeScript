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
    // this.id = 'd2';
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length)
    console.log(this.employees)
  }
}

class ITDepartment extends Department {
  admins : string[];

  constructor(id:string, admins: string[]) {
    super(id, 'IT');
    this.admins = admins;
  }
}

const it =  new ITDepartment('d1', ['Max']);

it.addEmployee('Max')
it.addEmployee('Manu')

// it.employees[2] = "Anna"

it.describe()
it.printEmployeeInformation()

// const accountingCopy = {name: 'DUMMY', describe: accounting.describe };

// accountingCopy.describe();
