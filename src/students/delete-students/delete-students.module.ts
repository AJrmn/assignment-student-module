import { Module } from '@nestjs/common';
import { DeleteStudentsController } from './delete-students.controller';
import { DeleteStudentsService } from './delete-students.service';

@Module({
  controllers: [DeleteStudentsController],
  providers: [DeleteStudentsService]
})
export class DeleteStudentsModule {}
