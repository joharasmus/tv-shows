export interface TvShow {
    id:             number,
    url:            string,
    name:           string,
    type:           string,
    language:       string,
    genres:         string[],
    status:         string,
    runtime:        number | null,
    averageRuntime: number,
    premiered:      string,
    ended:          string | null,
    officialSite:   string | null
    schedule:       Schedule,
    rating:         Rating,
    weight:         number,
    network:        Network | null,
    webChannel:     Network | null,
    dvdCountry:     Country | null,
    externals:      Externals,
    image:          Image,
    summary:        string,
    updated:        number,
    _links:         TvShowLinks
  }
  
  export interface Schedule {
    time: string,
    days: string[]
  }
  
  export interface Rating {
    average: number | null
  }
  
  export interface Network {
    id:             number,
    name:           string,
    country:        Country | null,
    officialSite:   string | null
  }
  
  export interface Country {
    name:       string,
    code:       string,
    timezone:   string
  }
  
  export interface Externals {
    tvrage:     number,
    thetvdb:    number | null,
    imdb:       string | null
  }
  
  export interface Image {
    medium:     string,
    original:   string
  }
  
  export interface TvShowLinks {
    self:               EpisodeLink,
    previousepisode:    EpisodeLink,
    nextepisode?:       EpisodeLink
  }
  
  export interface EpisodeLink {
    href: string
  }