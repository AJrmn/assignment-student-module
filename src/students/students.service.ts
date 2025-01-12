import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Student } from './student.entity';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';

@Injectable()
export class StudentsService {
  constructor(
    @InjectRepository(Student)
    private studentsRepository: Repository<Student>,  // Inject the repository
  ) {}

  // Create a student
  create(createStudentDto: CreateStudentDto): Promise<Student> {
    const student = this.studentsRepository.create(createStudentDto);
    return this.studentsRepository.save(student);
  }

  // Get all students
  findAll(): Promise<Student[]> {
    return this.studentsRepository.find();
  }

  // Get a student by ID
  findOne(id: number): Promise<Student> {
    return this.studentsRepository.findOne({ where: { id } });
  }

  // Update a student by ID
  async update(id: number, updateStudentDto: UpdateStudentDto): Promise<Student> {
    const student = await this.studentsRepository.findOne({ where: { id } });
    if (!student) {
      throw new Error('Student not found');
    }
    Object.assign(student, updateStudentDto);
    return this.studentsRepository.save(student);
  }

  // Delete a student by ID
  async remove(id: number): Promise<void> {
    const student = await this.studentsRepository.findOne({ where: { id } });
    if (!student) {
      throw new Error('Student not found');
    }
    await this.studentsRepository.remove(student);
  }
}
