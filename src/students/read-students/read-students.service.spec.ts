import { Test, TestingModule } from '@nestjs/testing';
import { ReadStudentsService } from './read-students.service';

describe('ReadStudentsService', () => {
  let service: ReadStudentsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReadStudentsService],
    }).compile();

    service = module.get<ReadStudentsService>(ReadStudentsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
