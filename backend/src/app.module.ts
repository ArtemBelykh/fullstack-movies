import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {ConfigModule, ConfigService} from "@nestjs/config";
import {TypeOrmModule} from "@nestjs/typeorm";
import { FilmsController } from './films/films.controller';
import { FilmsModule } from './films/films.module';
import { FilmsService } from "./films/films.service";
import { LanguageModule } from './language/language.module';
import { GenreModule } from './genre/genre.module';
import { FileModule } from './file/file.module';
import { AuthorModule } from './author/author.module';

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
        FilmsModule,
        LanguageModule,
        GenreModule,
        FileModule,
        AuthorModule
    ],
    controllers: [AppController, FilmsController],
    providers: [AppService, FilmsService],
})
export class AppModule {
}
