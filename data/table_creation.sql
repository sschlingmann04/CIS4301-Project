CREATE TABLE Platform (PlatformID INTEGER PRIMARY KEY, Name VARCHAR2 (255));
CREATE TABLE Publisher (PublisherID INTEGER PRIMARY KEY, Name VARCHAR2 (255));
CREATE TABLE Genre (GenreID INTEGER PRIMARY KEY, Name VARCHAR2 (255));
CREATE TABLE Developer (DeveloperID INTEGER PRIMARY KEY, Name VARCHAR2 (255));
CREATE TABLE Game (GameID INTEGER PRIMARY KEY, Name VARCHAR(255), Metacritic INTEGER,
Release DATE, Updated DATE, Playtime INTEGER, SuggestionsCount INTEGER,
GameSeriesCount INTEGER, ReviewsCount INTEGER, ESRBRating VARCHAR2(255));