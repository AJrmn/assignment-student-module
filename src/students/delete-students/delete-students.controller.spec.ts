import { Test, TestingModule } from '@nestjs/testing';
import { DeleteStudentsController } from './delete-students.controller';

describe('DeleteStudentsController', () => {
  let controller: DeleteStudentsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DeleteStudentsController],
    }).compile();

    controller = module.get<DeleteStudentsController>(DeleteStudentsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
