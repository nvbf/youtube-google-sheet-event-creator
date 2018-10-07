# Youtube Google sheet Event Creator

## Basic idea behind this project

Lower the entrybar for pepole to create events on youtube.
If you need to create a lot of events, there can be quite a daunting task to crate this for hand.
And requirements changes all the time for most ppl, so by enabling smart mind,
that are not programmers to controll the creation of events based on a google sheet can be very powerfull.

## Description

Based on a google sheet lets you to create, start and stop a youtube event!

# Requirements

## Enable Goole API and get API Key

1. Create a [Project to host your credentials in GCP](https://console.developers.google.com/projectselector/apis/credentials)
1. Enable [YouTube Live Streaming API](https://console.developers.google.com/apis/library/youtube.googleapis.com) ([more info](https://developers.google.com/youtube/v3/live/getting-started))
1. Enable [Google Sheets Api](https://console.developers.google.com/apis/api/sheets.googleapis.com/) ([more info](https://developers.google.com/sheets/api/))
1. On the [Credential page](https://console.developers.google.com/apis/credentials) choose `create credentials` and then choose `api key`, store the key.

## Example

[https://docs.google.com/spreadsheets/d/1rQ6JbcSRFFD0pvGixlR-v3qMUG7_yqYZYqwloiJtZsI/edit?usp=sharing](Example Sheet)

```sh
# Env var - Google Sheet (GS)
GS_CLIENT_ID="" \
GS_PROJECT_ID="" \
GS_CLIENT_SECRET="" \
GS_ACCESS_TOKEN="" \
GS_REFRESH_TOKEN="" \
GS_EXPIRE_DATE="" \
GS_CHEK_INTERVAL_SEK="60" \
GS_START_EVENT_TEXT="IN_PROGRESS" \
GS_STOP_EVENT_TEXT="FINISHED" \
GS_ROW_START="2" \
GS_START_TIME_COLUMN="A" \
GS_END_TIME_COLUMN="B" \
GS_TITTEL_COLUMN="C" \
GS_DESCRIPTION_COLUMN="D" \
GS_CATEGORY_COLUMN="E" \
GS_TAGS_COLUMN="F" \
GS_STARTSTOP_EVENT_COLUMN="G" \
YOUTUBE_STREAM_KEY="" \
npm run start
```

## Does this work?

This is based on a readme driven development, so this is created before I have done anything.
So right now, nothing.
