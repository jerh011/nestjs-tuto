import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { TweetService } from './tweet.service';
import { CreateTweetDto } from './dto/create-tweet.dto';
// import { UpdateTweetDto } from './dto/update-tweet.dto';

@Controller('tweet')
export class TweetController {
  constructor(private readonly tweetService: TweetService) {}

  @Post()
  create(@Body() createTweetDto: CreateTweetDto) {
    return this.tweetService.create(createTweetDto);
  }

  @Get(':userid')
  public GetTweets(@Param('userid',ParseIntPipe) userid:number) {
    return this.tweetService.getTweets(userid);
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.tweetService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateTweetDto: UpdateTweetDto) {
  //   return this.tweetService.update(+id, updateTweetDto);
  // }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tweetService.remove(+id);
  }
}
