import { Injectable } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';

let data: CreateStudentDto[] = [
  {
    id: '3',
    name: 'Иван',
    surName: 'Иванов',
    math: '3',
    rus: '5',
  },
];

@Injectable()
export class StudentService {
  create(createStudentDto: CreateStudentDto) {
    data.push(createStudentDto);
    return createStudentDto;
  }

  findAll() {
    return data;
  }

  findOne(id: string) {
    return data.find((item) => item.id === id);
  }

  update(id: string, updateStudentDto: CreateStudentDto) {
    data = data.map((item) => (item.id === id ? updateStudentDto : item));
    return 'success';
  }

  remove(id: string) {
    data = data.filter((item) => item.id !== id);
    return data;
  }
}
