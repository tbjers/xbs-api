import { Request } from 'express';
import { LogLevel } from '../server';

// Base class for data service implementations
// Implements the functionality executed when calling a route
export default class BaseService<T> {
  log: (level: LogLevel, message: string, req?: Request, err?: Error) => void;
  service: T;

  constructor(service: T, log: (level: LogLevel, message: string, req?: Request, err?: Error) => void) {
    this.service = service;
    this.log = log;
  }
}