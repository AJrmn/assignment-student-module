import { Test, TestingModule } from '@nestjs/testing';
import { DeleteStudentsService } from './delete-students.service';

describe('DeleteStudentsService', () => {
  let service: DeleteStudentsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DeleteStudentsService],
    }).compile();

    service = module.get<DeleteStudentsService>(DeleteStudentsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
