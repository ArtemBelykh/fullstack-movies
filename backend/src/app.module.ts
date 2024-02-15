import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {ConfigModule, ConfigService} from "@nestjs/config";
import {TypeOrmModule} from "@nestjs/typeorm";
import { FilmsModule } from './films/films.module';
import { LanguageModule } from './language/language.module';
import { GenreModule } from './genre/genre.module';
import { FileModule } from './file/file.module';
import { AuthorModule } from './author/author.module'
import {Film} from "./films/entities/film.entity";
import {Author} from "./author/entities/author.entity";
import {File} from "./file/entities/file.entity";
import {Genre} from "./genre/entities/genre.entity";
import {Language} from "./language/entities/language.entity";
import {FilmsService} from "./films/films.service";

@Module({
    imports: [
        ConfigModule.forRoot({isGlobal: true}),
        TypeOrmModule.forRootAsync({
          imports: [ConfigModule],
          useFactory: (configService: ConfigService) => ({
            type: "postgres",
            host: configService.get('DB_HOST'),
            port: configService.get('DB_PORT'),
            username: configService.get('DB_USERNAME'),
            password: configService.get('DB_PASSWORD'),
            database: configService.get('DB_NAME'),
            synchronize: true,
            entities: [__dirname + '/**/*.entity{.js, .ts}']
          }),
            inject: [ConfigService]
        }),
        TypeOrmModule.forFeature([Film, Author, File, Genre, Language, FilmsService]),
        FilmsModule,
        AuthorModule,
        FileModule,
        LanguageModule,
        GenreModule,

    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
