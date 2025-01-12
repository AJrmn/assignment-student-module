import { Controller, Get, Param, Delete } from '@nestjs/common';  // Import decorators
import { StudentsService } from './students.service';  // Import StudentsService
import { Student } from './student.entity';  // Import Student entity

@Controller('students')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}

  // Get all students
  @Get()
  async findAll(): Promise<Student[]> {
    return this.studentsService.findAll();
  }

  // Get a student by ID
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Student> {
    return this.studentsService.findOne(id);
  }

  // Delete a student by ID
  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    return this.studentsService.remove(id);
  }
}
