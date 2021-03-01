import { AppService } from './app.service';
import { Test } from '@nestjs/testing';
import { Todo } from "@nxworkspace/data";

describe('AppService', () => {
	let service: AppService;

	const todos: Todo[] = [{ title: 'Todo 1' }, { title: 'Todo 2' }];

	beforeAll(async () => {
		const app = await Test.createTestingModule({
			providers: [AppService],
		}).compile();

		service = app.get<AppService>(AppService);
	});

	describe('getData', () => {
		it('should return the todos array', () => {
			expect(service.getData()).toEqual(todos);
		});
	});
});
