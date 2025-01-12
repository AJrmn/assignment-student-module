import { Test, TestingModule } from '@nestjs/testing';
import { CreateStudentsController } from './create-students.controller';

describe('CreateStudentsController', () => {
  let controller: CreateStudentsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CreateStudentsController],
    }).compile();

    controller = module.get<CreateStudentsController>(CreateStudentsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
