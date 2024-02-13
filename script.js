var phrases = [
  "Because you are the sweetest person in the world",
  "Because you are the cutest person in the galaxy",
  "Because your beautiful and wholesome heart",
  "Because you care for me so much",
  "Because you always make me laugh",
  "Because you are there whenever I need you",
  "Because you are super mega cool",
  "Because you are my kitty",
  "Because I get fascinated with your tremendous knowledge about the world",
  "Because you have a fucking badass past war collection",
  "Because we think the same",
  "Because you are the one I want to call my family",
  "Because you have a gorgeous smile",
  "Because you have the most beautiful eyes in earth",
  "Because you make me proud of you with every acomplishment you obtain",
  "Because you complement me",
  "Because time with you feels like an infinite rain of hapiness",
  "Because you will be the one to travel the world alongside me",
  "Because you teach me french, know spanish and we talk in english",
  "Because you are very respectful, organized and responsible",
  "Because you support me ",
  "Because I feel more than good next to you"
];

var now = new Date();
var start = new Date(now.getFullYear(), 0, 0);
var diff = now - start;
var oneDay = 1000 * 60 * 60 * 24;
var day = Math.floor(diff / oneDay);

var index = day % phrases.length;

$(document).ready(function () {

    $(".title").click(function () {
      $(".container").addClass("open");
    });
  
    $(".close").click(function () {
      $(".container").removeClass("open");
    });

    $("#phraseholder").html(phrases[index]);
    
  });
  