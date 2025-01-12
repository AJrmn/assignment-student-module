import { Controller, Put, Param, Body } from '@nestjs/common';
import { StudentsService } from './../students.service';
import { UpdateStudentDto } from './../dto/update-student.dto';
import { Student } from './../student.entity';

@Controller('students/update')
export class UpdateStudentsController {
  constructor(private readonly studentsService: StudentsService) {}

  @Put(':id')
  async update(@Param('id') id: number, @Body() updateStudentDto: UpdateStudentDto): Promise<Student> {
    return this.studentsService.update(id, updateStudentDto);
  }
}
