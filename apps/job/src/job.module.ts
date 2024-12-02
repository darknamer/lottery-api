import { Module } from '@nestjs/common';
import { JobController } from './job.controller';
import { JobService } from './job.service';
import { CoreModule } from '@app/core';

@Module({
  imports: [CoreModule],
  controllers: [JobController],
  providers: [JobService],
})
export class JobModule {}
