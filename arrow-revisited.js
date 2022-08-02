let group = {
  title: 'Our Group',
  students: ['John', 'Pete', 'Alice'],

  showList() {
    this.students.forEach((student) => alert(this.title + ': ' + student));
  },
};

group.showList();

// forEach runs functions with this=undefined by default
// arrow functions ;
// do not have this
// do no have arguments
// can't be called with new
// also they don't have super
// they are meant for short pieces of code that do not have their own context
