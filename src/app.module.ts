import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { CustomersModule } from './customers/customers.module';
import { RolesModule } from './roles/roles.module';
import { PermissionsModule } from './permissions/permissions.module';
import { EventsModule } from './events/events.module';
import { ProductsModule } from './products/products.module';
import { OrdersModule } from './orders/orders.module';
import { CartsModule } from './carts/carts.module';
import { PaymentsModule } from './payments/payments.module';
import { DepartmentsModule } from './departments/departments.module';
import { EmployeesModule } from './employees/employees.module';
import { AttendancesModule } from './attendances/attendances.module';
import { SalariesModule } from './salaries/salaries.module';
import { WeldingsModule } from './weldings/weldings.module';
import { OvertimesModule } from './overtimes/overtimes.module';
import { DeliveriesModule } from './deliveries/deliveries.module';
import { CrewsModule } from './crews/crews.module';
import { KasbonsModule } from './kasbons/kasbons.module';
import { CategoriesModule } from './categories/categories.module';

@Module({
  imports: [UsersModule, CustomersModule, RolesModule, PermissionsModule, EventsModule, ProductsModule, OrdersModule, CartsModule, PaymentsModule, DepartmentsModule, EmployeesModule, AttendancesModule, SalariesModule, WeldingsModule, OvertimesModule, DeliveriesModule, CrewsModule, KasbonsModule, CategoriesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
