import { Controller, Delete, Param } from '@nestjs/common';
import { StudentsService } from './../students.service';

@Controller('students/delete')
export class DeleteStudentsController {
  constructor(private readonly studentsService: StudentsService) {}

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    return this.studentsService.remove(id);
  }
}
