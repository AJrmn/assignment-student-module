import { Test, TestingModule } from '@nestjs/testing';
import { CreateStudentsService } from './create-students.service';

describe('CreateStudentsService', () => {
  let service: CreateStudentsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CreateStudentsService],
    }).compile();

    service = module.get<CreateStudentsService>(CreateStudentsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
