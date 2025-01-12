import { Module } from '@nestjs/common';
import { StudentsService } from '../students.service';  // Make sure the path is correct
import { StudentsController } from '../students.controller';  // Make sure the path is correct
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from '../student.entity';  // Make sure the path is correct

@Module({
  imports: [TypeOrmModule.forFeature([Student])],
  controllers: [StudentsController],  // Include your controller here
  providers: [StudentsService],  // Include your service here
})
export class ReadStudentsModule {}
