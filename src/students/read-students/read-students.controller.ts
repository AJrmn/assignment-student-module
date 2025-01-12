import { Controller, Get, Param } from '@nestjs/common';
import { StudentsService } from './../students.service';
import { Student } from './../student.entity';

@Controller('students/read')
export class ReadStudentsController {
  constructor(private readonly studentsService: StudentsService) {}

  @Get()
  async findAll(): Promise<Student[]> {
    return this.studentsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Student> {
    return this.studentsService.findOne(id);
  }
}
