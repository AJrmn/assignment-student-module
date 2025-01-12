import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentsModule } from './students/students.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',  // Database type (MySQL in your case)
      host: 'localhost',  // Database host
      port: 3306,  // Database port
      username: 'root',  // Database username
      password: '',  // Database password
      database: 'student_db',  // Database name
      entities: [__dirname + '/**/*.entity{.ts,.js}'],  // Path to all entities
      synchronize: true,  // Auto-sync entities with the database (use with caution in production)
    }),
    StudentsModule,  // Import the students module
  ],
})
export class AppModule {}
