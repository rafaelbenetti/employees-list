import { AgePipe } from './age.pipe';
import * as moment from 'moment';

describe('AgePipe (isolated)', () => {  
  const pipe = new AgePipe();

  it('current year should return 0', () => {
    expect(pipe.transform(new Date())).toContain(0);
  });

  it('should calculate age correctly', () => {
    const birthDate = new Date(1991, 7, 15);
    const age = moment().diff(birthDate, 'years');
    
    expect(pipe.transform(birthDate)).toContain(age);
  });

  it('should display age in correct format', () => {
    const birthDate = new Date(1991, 7, 15);
    const age = `${moment().diff(birthDate, 'years')} Years`;    
    expect(pipe.transform(birthDate)).toContain(age);
  });
});