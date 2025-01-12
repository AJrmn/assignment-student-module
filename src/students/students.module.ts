import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentsService } from './students.service';
import { StudentsController } from './students.controller';
import { Student } from './student.entity';
import { CreateStudentsController } from './create-students/create-students.controller';
import { ReadStudentsController } from './read-students/read-students.controller';
import { UpdateStudentsController } from './update-students/update-students.controller';
import { DeleteStudentsController } from './delete-students/delete-students.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Student])],
  controllers: [
    StudentsController,
    CreateStudentsController,
    ReadStudentsController,
    UpdateStudentsController,
    DeleteStudentsController,
  ],
  providers: [StudentsService],
})
export class StudentsModule {}
