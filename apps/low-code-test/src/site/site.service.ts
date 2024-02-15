import { Inject, Injectable } from '@nestjs/common';
import { MongoRepository } from 'typeorm';
import { CreateSiteDto } from './dto/create-site.dto';
import { UpdateSiteDto } from './dto/update-site.dto';
import { Site } from './entities/site.mongo.entity';
import { ObjectId } from 'mongodb';

@Injectable()
export class SiteService {
  constructor(
    @Inject('SITE_REPOSITORY')
    private siteRepository: MongoRepository<Site>,
  ) { }

  create(createSiteDto: CreateSiteDto) {
    return this.siteRepository.save(createSiteDto);
  }

  findAll() {
    return this.siteRepository.find();
  }

  findOne(id: string) {
    return this.siteRepository.findOne({
      where: {
        "_id": new ObjectId(id)
      }
    });
  }

  update(id: number, updateSiteDto: UpdateSiteDto) {
    return `This action updates a #${id} site`;
  }

  remove(id: number) {
    return `This action removes a #${id} site`;
  }
}
