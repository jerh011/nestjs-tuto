import { Injectable } from '@nestjs/common';
import { CreateTweetDto } from './dto/create-tweet.dto';
import { UsersService } from '../users/users.service';
import { text } from 'stream/consumers';
// import { UpdateTweetDto } from './dto/update-tweet.dto';

@Injectable()
export class TweetService {
  constructor(private readonly userService:UsersService ){}
  tweets:{ text:String,date:Date,userId:Number}[]=[
    {text:'si',date:new Date ('2025-11-12'),userId:1},
    {text:'si1',date:new Date ('2025-11-12'),userId:1},
    {text:'no',date:new Date ('2025-11-12'),userId:2}
  ]
  
  create(createTweetDto: CreateTweetDto) {
    return 'This action adds a new tweet';
  }

  getTweets(userid: number) {
    const user= this.userService.findOne(userid)
    const tweet= this.tweets.filter(t=>t.userId===userid);
    const response= tweet.map(t=>{return{text:t.text,date: t.date, name: user?.name}})
    return response;
  }

  findOne(id: number) {
    return `This action returns a #${id} tweet`;
  }

  // update(id: number, updateTweetDto: UpdateTweetDto) {
  //   return `This action updates a #${id} tweet`;
  // }

  remove(id: number) {
    return `This action removes a #${id} tweet`;
  }
}
