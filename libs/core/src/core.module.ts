import { DataModule } from '@app/data';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    DataModule
  ],
  providers: [],
  exports: [
    DataModule
  ],
})
export class CoreModule {}
