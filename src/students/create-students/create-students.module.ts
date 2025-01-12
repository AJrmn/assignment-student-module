import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentsService } from '../students.service';  // Ensure correct path
import { CreateStudentsController } from './create-students.controller';
import { Student } from '../student.entity';  // Ensure correct path

@Module({
  imports: [TypeOrmModule.forFeature([Student])],
  controllers: [CreateStudentsController],
  providers: [StudentsService],  // Register StudentsService here
})
export class CreateStudentsModule {}
