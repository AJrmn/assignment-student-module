import { Module } from '@nestjs/common';
import { UpdateStudentsController } from './update-students.controller';
import { UpdateStudentsService } from './update-students.service';

@Module({
  controllers: [UpdateStudentsController],
  providers: [UpdateStudentsService]
})
export class UpdateStudentsModule {}
