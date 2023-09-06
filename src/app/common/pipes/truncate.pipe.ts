import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(input: string, wordsCount: number): string {
    let words = input.split(/[\s-]+/);

    if (words.length > wordsCount) {
      let truncated = '';
      for (let i = 0; i < wordsCount; i++) {
        if (i !== 0) {
          if (input[words[i - 1].length + truncated.length] === '-') {
            truncated += '-';
          } else {
            truncated += ' ';
          }
        }
        truncated += words[i];
      }

      return truncated + '...';
    }

    return input;
  }

}
