import { Test, TestingModule } from '@nestjs/testing';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Todo } from "@nxworkspace/data";

describe('AppController', () => {
  let app: TestingModule;
  const todos: Todo[] = [{ title: 'Todo 1' }, { title: 'Todo 2' }];

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();
  });

  describe('getData', () => {
    it('should return the todos array', () => {
      const appController = app.get<AppController>(AppController);
      expect(appController.getData()).toEqual(todos);
    });
  });
});
