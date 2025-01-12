import { Test, TestingModule } from '@nestjs/testing';
import { UpdateStudentsService } from './update-students.service';

describe('UpdateStudentsService', () => {
  let service: UpdateStudentsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UpdateStudentsService],
    }).compile();

    service = module.get<UpdateStudentsService>(UpdateStudentsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
