import { Test, TestingModule } from '@nestjs/testing';
import { UpdateStudentsController } from './update-students.controller';

describe('UpdateStudentsController', () => {
  let controller: UpdateStudentsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UpdateStudentsController],
    }).compile();

    controller = module.get<UpdateStudentsController>(UpdateStudentsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
