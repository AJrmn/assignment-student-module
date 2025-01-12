import { Test, TestingModule } from '@nestjs/testing';
import { ReadStudentsController } from './read-students.controller';

describe('ReadStudentsController', () => {
  let controller: ReadStudentsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReadStudentsController],
    }).compile();

    controller = module.get<ReadStudentsController>(ReadStudentsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
