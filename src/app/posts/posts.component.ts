import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent  {
  title = 'Songs Rating';
  songs = [

  {title: "Yevevo Yevevo Cheppalanipisthundhi", artist: "Shreya Ghoshal", likes: 1},
  {title: "Emo Idivarakemo", artist: "Shreya Ghoshal", likes: 3},
  {title: "Oka Nuvvu Oka Nenu", artist: "Shreya Ghoshal", likes: 2},
  {title: "Mooga Manasulu", artist: "Shreya Ghoshal", likes: 0},
  {title: "You & ME", artist: "Shreya Ghoshal", likes: 0}

  ];
  addLike(input){
  this.songs[input].likes +=1;
} 
removeLike(input){
  this.songs[input].likes -=1;
} 
args="Me";

}
