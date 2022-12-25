import { Address } from './address';
import { Certificate } from './certificate';
import { Experience } from './experience';

export class Freelancer {
  constructor(
    public id: string,
    public rev: string,
    public name: string,
    public userName: string,
    public email: string,
    public mobile: number,
    public address: Address,
    public category: string[],
    public hoursPerWeek: number,
    public rating: number,
    public talentQuality: string,
    public availableBadge: boolean,
    public skills: string[],
    public gender: string,
    public languages: string[],
    public jobsCompleted: number,
    public joinedDate: Date,
    public pricePerHour: number,
    public description: string,
    public certificates: Certificate[],
    public experiences: Experience[]
  ) {}
}
